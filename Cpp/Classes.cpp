#include <iostream>
#include <list>
using namespace std;

class yc{
    public:
    string name;
    string ownername;
    int subcount;
    list<string> vidtitles;
};

int main(){

    yc y;
    y.name = "Abhi codes";
    y.ownername = "Abhi";
    y.subcount = 1000000;
    y.vidtitles = { "A", "B", "C"};

    cout<<"Name : "<<y.name <<endl;
    cout<<"Owner name : "<<y.ownername <<endl;
    cout<<"Sub count : "<<y.subcount <<endl;
    cout<<"Videos :"<<endl;
    for(string i:y.vidtitles){
        cout<<i<<endl;
    }

    return 0;
}