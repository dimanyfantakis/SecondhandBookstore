package com.github.dimanyfantakis.SecondhandBookstore.payment;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/payment")
@AllArgsConstructor
public class PaymentController {

    private final StripeClient stripeClient;

    @PostMapping("/charge")
    public Map<String, String> chargeCard(@RequestBody Payment payment) throws Exception {
        return this.stripeClient.chargeCreditCard(payment);
    }
}
