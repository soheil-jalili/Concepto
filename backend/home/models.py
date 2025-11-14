from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.utils.text import slugify

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)  
        
class UserProfile(models.Model):
    ROLE_CHOICES = [
        ("author", "Author"),
        ("admin", "Admin"),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, blank=True, null=True) 
    
    def __str__(self):
        return self.user.username if self.user else "No user"
    
        
class Menu(models.Model):
    route = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.route
    
    
class Slogan(models.Model):
    title = models.CharField(max_length=255)
    short_description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    

class CategoryHome(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/home/category-home/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.title
    
    

class Company(models.Model):
    main_image = models.ImageField(upload_to='images/company/main-images/')
    company_logo = models.ImageField(upload_to='images/company/logos/')
    company_name = models.CharField(max_length=255)
    company_short_description = models.CharField(max_length=255)
    new_inventors = models.FloatField(default=0)
    new_contact = models.PositiveBigIntegerField(default=0)
    description = models.TextField(blank=True,null=True)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    rate = models.PositiveIntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)
        ]
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

       
    
    class Meta:
        verbose_name = 'company'
        verbose_name_plural = 'companies'
    
    def __str__(self):
        return self.company_name
    
class JobOpportunity(models.Model):
    company_name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/job_opportunity/company/')
    opportunity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.company_name
    


class News(models.Model):
    company_name = models.CharField(max_length=255)
    main_image = models.ImageField(upload_to='images/news/main-image/company/')
    title = models.CharField(max_length=255)
    short_description = models.CharField(max_length=255)
    author = models.ForeignKey(User , on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    class Meta:
        verbose_name= "news"
        verbose_name_plural = "news"

    

    def __str__(self):
        return self.company_name
    

class Category(models.Model):
    image = models.ImageField(upload_to='images/categories/')
    title = models.CharField(max_length=255)
    description = models.TextField()
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
            
    def __str__(self):
        return self.title
    
    
    class Meta:
        verbose_name= "category"
        verbose_name_plural = "categories"


class FooterLinkMain(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    

class FooterLink(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    

class SocialLink (models.Model):
    icons = models.TextField()
    title = models.CharField(max_length=255)
    link = models.URLField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.title