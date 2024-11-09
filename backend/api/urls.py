from django.urls import path
from .views import signup, login, forgot_password, admin_login

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login, name='login'),
    path('forgot-password/', forgot_password, name='forgot-password'),
    path('admin-login/', admin_login, name='admin-login'),
]