package com.example.demo.di;
//클래스간의 결합도를 낮추는 방법은 인터페이스와 추상클래스
//중심의 코딩을 전개하는 것이다.
public interface HelloBean {
    public String getGreeting(String msg);

}
