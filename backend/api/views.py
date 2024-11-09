from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.contrib.auth.forms import PasswordResetForm
from .serializers import UserSerializer
from rest_framework import viewsets
from .models import FoodItem
from .serializers import FoodItemSerializer
from .permissions import IsAdminUserOrReadOnly

# Signup View
@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # Create token for the user
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login View (using Token authentication)
@api_view(['POST'])
def login(request):
    from django.contrib.auth import authenticate
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if user:
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key}, status=status.HTTP_200_OK)
    return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

# Forgot Password (Sends a password reset email)
@api_view(['POST'])
def forgot_password(request):
    email = request.data.get('email')
    try:
        user = User.objects.get(email=email)
        token = default_token_generator.make_token(user)
        reset_url = f'http://yourdomain.com/reset-password/{token}'
        send_mail(
            'Password Reset Request',
            f'Click the following link to reset your password: {reset_url}',
            'no-reply@yourdomain.com',
            [email],
        )
        return Response({"message": "Password reset email sent."}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"error": "Email not found."}, status=status.HTTP_400_BAD_REQUEST)

# Admin Login (same as regular login)
@api_view(['POST'])
def admin_login(request):
    return login(request)




class FoodItemViewSet(viewsets.ModelViewSet):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    permission_classes = [IsAdminUserOrReadOnly]