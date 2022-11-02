#include <iostream>
using namespace std;

struct phone{
    string name;
    int storagespace;
    string color;
    float price;
};

struct person{
    string name;
    int age;
    phone p1;
};

void phoneinfo(phone p1){
    cout<<"Name : "<<p1.name<<endl;
    cout<<"Space : "<<p1.storagespace<<" GB"<<endl;
    cout<<"Color : "<<p1.color<<endl;
    cout<<"Price : "<<p1.price<<endl;
}

void personinfo(person p){
    cout<<"Name : "<<p.name<<endl;
    cout<<"Age : "<<p.age<<endl;
    cout<<"Phone : ";
    phoneinfo(p.p1);
}

int main(){

    phone p1;
    p1.name = "iphone 12";
    p1.storagespace = 128;
    p1.color = "Blue";
    p1.price = 999.99;

    phone p2;
    p2.name = "Galaxy S21";
    p2.storagespace = 64;
    p2.color = "Black";
    p2.price = 888.88;

    person p;
    p.name = "Abhi";
    p.age = 18;
    p.p1 = p2;

    // phoneinfo(p1);
    // cout<<endl;
    // phoneinfo(p2);
    personinfo(p);

    return 0;
}