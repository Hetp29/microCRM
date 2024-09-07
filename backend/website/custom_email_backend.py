from django.core.mail.backends.smtp import EmailBackend

class CustomEmailBackend(EmailBackend):
    def _get_ssl_context(self):
        import ssl
        context = super()._get_ssl_context()
        context.check_hostname = False
        context.verify_mode = ssl.CERT_NONE
        return context
    
    