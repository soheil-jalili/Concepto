from django.contrib import admin
from home.models import UserProfile,Menu,Slogan,CategoryHome,Company,JobOpportunity,News,Category,FooterLinkMain,FooterLink,SocialLink

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    pass
@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    pass
@admin.register(Slogan)
class SloganAdmin(admin.ModelAdmin):
    pass
@admin.register(CategoryHome)
class CategoryHomeAdmin(admin.ModelAdmin):
    pass
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    pass
@admin.register(JobOpportunity)
class JobOpportunityAdmin(admin.ModelAdmin):
    pass
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    pass
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass
@admin.register(FooterLinkMain)
class FooterLinkMainAdmin(admin.ModelAdmin):
    pass
@admin.register(FooterLink)
class FooterLinkAdmin(admin.ModelAdmin):
    pass

@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    pass