class Config(object):
    DEBUG = True
    TESTING = False

class DevelopmentConfig(Config):
    SECRET_KEY = 'jhfduhfd8754827ywehujkfh977428T%^#@#TYHGF55t7yhlgjhhsddfda'
    OPENAI_KEY = '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'

config = {
    'development': DevelopmentConfig,
    'testing': DevelopmentConfig,
    'production': DevelopmentConfig
}