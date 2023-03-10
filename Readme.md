This is a vaccination system built with React and includes API endpoints to post data, retrieve data from the table, get age-wise counts of vaccinated people, and get age-wise and gender-wise vaccination results.

API Endpoints

The following are the API endpoints that you can use to interact with the system:

    POST /vote

    This endpoint is used to submit the vaccination details of a person. The data should be sent in JSON format with the following fields:
        name: The name of the person (string).
        age: The age of the person (number).
        gender: The gender of the person (string).
        vaccinated: A boolean indicating whether the person is vaccinated or not.
        dateofbirth: The date of birth of person (date)

    GET /date

    This endpoint returns all the vaccination records in the system as an array of JSON objects. Each object represents the vaccination details of a person and has the following fields:
        id: The unique ID of the record (string).
        name: The name of the person (string).
        age: The age of the person (number).
        gender: The gender of the person (string).
        vaccinated: A boolean indicating whether the person is vaccinated or not.
        dateofbirth: The date of birth of patient

    GET /counts

    This endpoint returns the age-wise count of vaccinated people as a JSON object. The object has keys representing the age group and values representing the count of vaccinated people in that age group.

    GET /results

    This endpoint returns the age-wise and gender-wise vaccination results as a JSON object. The object has keys representing the age group and values representing the count of vaccinated people in that age group. Each age group object also has a nested object with keys representing the gender and values representing the count of vaccinated people of that gender in that age group.