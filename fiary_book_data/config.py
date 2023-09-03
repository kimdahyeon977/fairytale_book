import os

class Config(object):
    DEBUG = os.environ.get("DEBUG", True)
    TESTING = os.environ.get("TESTING", False)

class DevelopmentConfig(Config):
    SECRET_KEY = os.environ.get("SECRET_KEY", "")
    OPENAI_KEY = os.environ.get("OPENAI_KEY", "")

config = {
    'development': DevelopmentConfig,
    'testing': DevelopmentConfig,
    'production': DevelopmentConfig
}
