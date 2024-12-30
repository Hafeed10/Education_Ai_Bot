from django.urls import path
from .views import GenerateQuestions

urlpatterns = [
    path('generate-questions/', GenerateQuestions.as_view(), name='generate-questions'),
]
