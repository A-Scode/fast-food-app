from django.db import models
from django.contrib.auth.models import User

class FoodItem(models.Model):
    CATEGORY_CHOICES = [
        ('Fast Food', 'Fast Food'),
        ('Drinks', 'Drinks'),
        ('Desserts', 'Desserts'),
        ('Snacks', 'Snacks'),
        # Add more categories as needed
    ]
    
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    seller_name = models.CharField(max_length=255)
    seller_address = models.TextField()
    images = models.ImageField(upload_to='food_images/', null=True, blank=True)
    restaurant = models.CharField(max_length=255)  # New field for restaurant name
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def get_discounted_price(self):
        if self.discount:
            return self.price - (self.price * (self.discount / 100))
        return self.price
