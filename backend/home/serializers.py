from rest_framework.serializers import ModelSerializer,SerializerMethodField
from .models import Menu,Slogan,CategoryHome,Company,JobOpportunity,News,Category,FooterLinkMain,FooterLink,SocialLink

class MenuSerializer(ModelSerializer):
    class Meta:
        model = Menu
        fields = ('id' , 'route')
        
        

class SloganSerializer(ModelSerializer):
    class Meta:
        model = Slogan
        fields = ('title' , 'short_description')
        
        

class CategoryHomeSerializer(ModelSerializer):
    class Meta:
        model = CategoryHome
        fields = ('id','title' , 'image')
        
        

class PopularCompanySerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = ('id' , 'main_image' , 'company_logo' , 'company_name' ,'company_short_description','new_inventors','new_contact','country','city','rate')
        
        
class JobOpportunitySerializer(ModelSerializer):
    class Meta:
        model = JobOpportunity
        fields = ('id' ,  'company_name' , 'image' , 'opportunity')
        
        
class NewNewsSerializer(ModelSerializer):
    author_name = SerializerMethodField()

    class Meta:
        model = News
        fields = ('id', 'title','created_at', 'company_name', 'main_image', 'short_description', 'author_name')

    def get_author_name(self, obj):
        if obj.author.first_name and obj.author.last_name:
            return f"{obj.author.first_name} {obj.author.last_name}"
        return None

class CategoryEventsSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'image','title', 'description', 'country', 'city', 'created_at')

