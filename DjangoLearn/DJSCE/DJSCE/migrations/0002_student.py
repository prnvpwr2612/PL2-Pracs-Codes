# Generated by Django 5.0.4 on 2024-05-07 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DJSCE', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SAP_ID', models.IntegerField()),
                ('Name', models.CharField(max_length=50)),
                ('Department', models.CharField(max_length=100)),
            ],
        ),
    ]
