FROM python:3.10.10

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

# 환경 변수 설정
ENV DEBUG=True
ENV TESTING=False
ENV SECRET_KEY=your_secret_key
ENV OPENAI_KEY=your_openai_key

EXPOSE 8000

CMD python ./app.py
