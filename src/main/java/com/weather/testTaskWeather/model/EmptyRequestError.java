package com.weather.testTaskWeather.model;

public class EmptyRequestError {

    private int cod;

    private String message;

    public EmptyRequestError(final int cod, final String message) {
        this.cod = cod;
        this.message = message;
    }

    public int getCod() {
        return cod;
    }

    public void setCod(final int cod) {
        this.cod = cod;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(final String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "EmptyRequestError{" +
                "cod=" + cod +
                ", message='" + message + '\'' +
                '}';
    }
}
