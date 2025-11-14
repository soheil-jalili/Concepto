from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from .models import Menu,Slogan,CategoryHome,Company,JobOpportunity,News,Category,FooterLinkMain,FooterLink,SocialLink
from .serializers import MenuSerializer,SloganSerializer,CategoryHomeSerializer,PopularCompanySerializer , JobOpportunitySerializer , NewNewsSerializer,CategoryEventsSerializer


class GetHome(APIView):
    
    def get(self, request):
        # Menus
        first_four = Menu.objects.all()[:4]  
        last_one = Menu.objects.last()       
        if last_one not in first_four:
            menus = list(first_four) + [last_one]
        else:
            menus = list(first_four)
        menu_serializer = MenuSerializer(menus, many=True)
        
        # Slogans
        last_slogans = Slogan.objects.order_by('-updated_at').first()
        slogan_serializer = SloganSerializer(instance = last_slogans)
        
        # CategoryHome
        category_homes = reversed(CategoryHome.objects.order_by('-updated_at')[:14])
        category_home_serializer = CategoryHomeSerializer(instance=category_homes, many=True)
        
        
        # popularCompany
        popular_company_home= reversed(Company.objects.order_by('-updated_at')[:4])
        popular_company_serializer = PopularCompanySerializer(instance = popular_company_home,many=True)

        # JobOpportunity
        job_opportunity_home= reversed(JobOpportunity.objects.order_by('-updated_at')[:6])
        job_opportunity_serializer = JobOpportunitySerializer(instance = job_opportunity_home,many=True)

        # New News
        new_news_home= reversed(News.objects.order_by('-updated_at')[:3])
        new_news_serializer = NewNewsSerializer(instance = new_news_home,many=True)
        
        # Category Events
        category_events_homes= reversed(News.objects.order_by('-updated_at')[:4])
        

        category_events_serializer = CategoryEventsSerializer(instance = category_events_homes,many=True)
        
        
        return Response({'home': {'menus': menu_serializer.data} , 'slogans' :slogan_serializer.data , 'categries_home' : category_home_serializer.data , 'popular_companies' : popular_company_serializer.data , 'job_opportunities' : job_opportunity_serializer.data , 'new_news' : new_news_serializer.data , 'category_events' :  category_events_serializer.data},status=HTTP_200_OK)

    