from django.urls import path
from medicpage.views import MedicPage, Calculo

urlpatterns = [
    path('', MedicPage, name="MedicPage"),
    path('calculo', Calculo, name="Calculo"),
]
