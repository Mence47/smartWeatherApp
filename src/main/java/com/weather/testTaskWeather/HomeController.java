package com.weather.testTaskWeather;

import com.weather.testTaskWeather.model.EmptyRequestError;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

/**
 * Контроллер домашней страницы
 *
 * @author batlukov-is
 */
@Controller
public class HomeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);

    private static final String API_KEY = "54820e6fe8b3f39dc7f360449975b8a5";

    private static final String URL_TEMPLATE = "https://api.openweathermap.org/data/2.5/weather?q=";

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/")
    public String home(final Model model) {
        return "html/index.html";
    }

    @GetMapping("/city/{city}")
    @ResponseBody
    public String getWeatherByCity(@PathVariable("city") final String city) {
        LOGGER.info("Path variable={}", city);
        LOGGER.info("RestTemplate={}", restTemplate);

        final String url = URL_TEMPLATE + city + "&APPID=" + API_KEY + "&units=metric" + "&lang=ru";

        String response;
        try {
            response = restTemplate.getForObject(url, String.class);
        }
        catch (final HttpClientErrorException e) {
            response = e.getResponseBodyAsString();
        }

        LOGGER.info(response);

        return response;
    }

    @GetMapping("/city")
    @ResponseBody
    public EmptyRequestError noCityProcessor() {
        LOGGER.info("Empty city request");

        return new EmptyRequestError(400, "Невозможно выполнить пустой запрос");
    }
}
