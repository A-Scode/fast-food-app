from rest_framework import permissions

class IsAdminUserOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow admin users to modify food items.
    """
    def has_permission(self, request, view):
        # Allow read-only access to everyone
        if request.method in permissions.SAFE_METHODS:
            return True
        # Allow write permissions only to admin users
        return request.user and request.user.is_staff
