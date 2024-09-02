# serializers.py
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['name', 'job_title', 'email', 'phone', 'employees', 'company_name', 'password', 'is_active']
        extra_kwargs = {'password': {'write_only': True}, 'is_active': {'read_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            job_title=validated_data['job_title'],
            phone=validated_data.get('phone', ''),
            employees=validated_data['employees'],
            company_name=validated_data['company_name'],
            password=validated_data['password']
        )
        user.is_active = True  # Ensure the user is active
        user.save()
        return user
