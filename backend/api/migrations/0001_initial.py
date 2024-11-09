# Generated by Django 5.1 on 2024-11-09 04:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FoodItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('category', models.CharField(choices=[('Fast Food', 'Fast Food'), ('Drinks', 'Drinks'), ('Desserts', 'Desserts'), ('Snacks', 'Snacks')], max_length=50)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discount', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('seller_name', models.CharField(max_length=255)),
                ('seller_address', models.TextField()),
                ('images', models.ImageField(blank=True, null=True, upload_to='food_images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]