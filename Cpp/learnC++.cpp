#include <iostream>
#include <string>
using namespace std;

// int add(int a, int b){
//     int c = a+b;
//     return c;
// }

class Employee
{
public:
    string name;
    int sal;

    Employee(string name, int sal, int sp)
    {
        this->name = name;
        this->sal = sal;
        this->secret = sp;
    }

    void pr()
    {
        cout << this->name << endl
             << this->sal << endl;
    }

    void printsp()
    {
        cout << this->secret << endl;
    }

private:
    int secret;
};

int main()
{
    Employee ab("Abhi", 3000, 1234);
    // ab.name = "Abhi";
    // ab.sal = 1000;
    ab.pr();
    // cout << ab.secret;  //Gives error as it is private
    ab.printsp();   //This gives the private variable.... Public methods can access private variables.
}