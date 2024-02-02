package com.anonymous.couter;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CounterModule extends ReactContextBaseJavaModule {
    public Integer count = 0;
    CounterModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CounterModule";
    }

    @ReactMethod
    public void increment() {
        count = count + 1;
        Log.d("Counter Module","increment gets triggered" + count);
    }

    @ReactMethod
    public void setCount(Integer _count) {
        count = _count;
        Log.d("Counter Module","setCount gets triggered" + count);
    }

    @ReactMethod
    public void getCount(Callback callback) {
        Log.d("Counter Module", "getCount? " + count);
        callback.invoke(count);
    }
}