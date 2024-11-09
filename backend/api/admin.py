from django.contrib import admin
from .models import FoodItem

class FoodItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'discount','restaurant', 'seller_name', 'created_at', 'updated_at']
    search_fields = ['name', 'category', 'seller_name','restaurant']
    list_filter = ['category', 'discount']
    ordering = ['created_at']

admin.site.register(FoodItem, FoodItemAdmin)
