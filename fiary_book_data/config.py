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