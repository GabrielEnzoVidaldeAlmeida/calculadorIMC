from django.shortcuts import render

# Create your views here.
def MedicPage(request):
    return render(request, "medicpage/index.html")

def Calculo(request):
    return render(request, "medicpage/calculo.html")