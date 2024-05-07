from django.db import models

class Employee(models.Model):
    Empid = models.IntegerField()
    name = models.CharField(max_length=25)
    address = models.CharField(max_length=100)
    salary = models.IntegerField()
    Department = models.CharField(max_length=25)