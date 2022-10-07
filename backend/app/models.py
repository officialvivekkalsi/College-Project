from django.db import models

class Students(models.Model):
    name=models.CharField(max_length=200,null=True,blank=True)
    degree=models.CharField(max_length=200,null=True,blank=True)
    email=models.EmailField(max_length=200,null=True,blank=True)
    Address=models.CharField(max_length=200,null=True,blank=True)
    pin=models.IntegerField(null=True,blank=True)
    dob=models.DateField()
    image=models.ImageField(null=True,blank=True)
    country=models.CharField(max_length=200,null=True,blank=True)
    selfintro=models.CharField(max_length=500,null=True,blank=True)
    
    def __str__(self) :
        return self.id
    def __str__(self) :
        return self.name