from rest_framework import serializers

class InterestSerializer(serializers.Serializer):
    interests = serializers.ListField(
        child=serializers.CharField(max_length=100)
    )

class PromptSerializer(serializers.Serializer):
    prompt = serializers.CharField(max_length=500)