from django.http import HttpResponse
from django.shortcuts import render

def welcome(request):
    return HttpResponse("Welcome to DJSCE!")

def Course(request):
    return HttpResponse("<b>Course</b>")

def CourseID(request, courseid):
    return HttpResponse(courseid)

def HomePage(request):
    data= {
        'title':"Portfolio|Pranav Pawar",
        'Achievments':"1st Prize in BioCode Breakers ML Hackathon organised by IIT-BHU"
    }
    return render(request,"index.html",data)