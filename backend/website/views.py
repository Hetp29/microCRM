from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model, authenticate, login
import json

@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            name = data.get('name')
            job_title = data.get('job_title')
            phone = data.get('phone')
            employees = data.get('employees')
            company_name = data.get('company_name')
            password = data.get('password')

            if not all([email, name, job_title, phone, employees, company_name, password]):
                return JsonResponse({'error': 'All fields are required'}, status=400)

            User = get_user_model()
            user = User.objects.create_user(
                email=email,
                name=name,
                job_title=job_title,
                phone=phone,
                employees=employees,
                company_name=company_name,
                password=password
            )
            return JsonResponse({'message': 'User created successfully'}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            
            if not all([email, password]):
                return JsonResponse({'error': 'Email and password are required'}, status=400)
            
            user = authenticate(request, email=email, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({'message': 'Login successful'}, status=200)
            else:
                return JsonResponse({'error': 'Invalid email or password'}, status=400)
            
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)
            

def Home(request):
    return render(request, 'home.html')
