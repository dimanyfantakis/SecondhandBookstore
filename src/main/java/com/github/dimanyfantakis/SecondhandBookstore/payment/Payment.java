package com.github.dimanyfantakis.SecondhandBookstore.payment;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
public class Payment {

    private final String name;
    private final String currency;
    private final String successUrl;
    private final String cancelUrl;
    private final String imageUrl;
    private final Long quantity;
    private final Long amount;
}
