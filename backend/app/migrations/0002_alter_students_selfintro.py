# Generated by Django 4.1.2 on 2022-10-04 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='selfintro',
            field=models.CharField(max_length=344),
        ),
    ]
