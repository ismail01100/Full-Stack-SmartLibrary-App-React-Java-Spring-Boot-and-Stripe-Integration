package com.mouadpro.springbootlibrary.controller;

import com.mouadpro.springbootlibrary.entity.Message;
import com.mouadpro.springbootlibrary.requestmodels.AdminQuestionRequest;
import com.mouadpro.springbootlibrary.requestmodels.PaymentInfoRequest;
import com.mouadpro.springbootlibrary.service.MessagesService;
import com.mouadpro.springbootlibrary.service.PaymentService;
import com.mouadpro.springbootlibrary.utils.ExtractJWT;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/payment/secure")
public class PaymentController {

    private PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }



}
