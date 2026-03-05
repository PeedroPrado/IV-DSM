const int dac_pin = 26;

void setup(){
}

void loop (){
  for(int value = 0; value <= 255; value++){
    dacWrite(dac_pin, value);
    delay(5);
  }

  for(int value =255; value >=0; value--){
    dacWrite(dac_pin, value);
    delay(5);
  }
}
