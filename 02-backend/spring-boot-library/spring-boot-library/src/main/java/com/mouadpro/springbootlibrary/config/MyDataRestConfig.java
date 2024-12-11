package com.mouadpro.springbootlibrary.config;

import com.mouadpro.springbootlibrary.entity.Book;
import com.mouadpro.springbootlibrary.entity.Message;
import com.mouadpro.springbootlibrary.entity.Review;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration

public class MyDataRestConfig  implements RepositoryRestConfigurer {

    private String theAllowedOrigins = "http://localhost:3000";
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,
                                                     CorsRegistry cors){
        HttpMethod[] theUnsuportedActions = {
                HttpMethod.POST,
                HttpMethod.PATCH,
                HttpMethod.DELETE,
                HttpMethod.PUT};

            config.exposeIdsFor(Book.class);
            config.exposeIdsFor(Review.class);
            config.exposeIdsFor(Message.class);
            disableHttpMethods(Book.class, config, theUnsuportedActions);
            disableHttpMethods(Review.class, config, theUnsuportedActions);
            disableHttpMethods(Message.class, config, theUnsuportedActions);
            /*Configure CORS Mapping*/
            cors.addMapping(config.getBasePath() +"/**")
                    .allowedOrigins(theAllowedOrigins);
    }

    private  void disableHttpMethods(Class theClass,
                                     RepositoryRestConfiguration config,
                                     HttpMethod[] theUnsuportedActions){
        config.getExposureConfiguration().
                forDomainType(theClass).
                withItemExposure((metdata, httpMethods) ->
                        httpMethods.disable(theUnsuportedActions))
                .withCollectionExposure((metdata, httpMethods) ->
                        httpMethods.disable(theUnsuportedActions));

    }
}
