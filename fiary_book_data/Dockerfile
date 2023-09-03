FROM python:3.10.10
WORKDIR /app
COPY ../../fairytale_book_sub%202/fiary_book_data .
RUN pip install -r requirements.txt
EXPOSE 8000
CMD python ./app.py