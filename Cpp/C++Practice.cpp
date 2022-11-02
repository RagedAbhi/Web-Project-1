#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int s = 1;

    for (int i = 1; i <= 2 * n; i++)5
    
    {
        for (int j = 1; j <= 2 * n; j++)
        {
            if (j == i || j == 2 * n - i)
            {
                cout << "* ";
            }
            else
            {
                cout << "  ";
            }
            // cout<<s<<" ";
            // s+=1;
        }
        cout << endl;
    }
}