from supabase import create_client, Client
from .config import settings

supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

def get_supabase() -> Client:
    return supabase