#include <bits/stdc++.h>
using namespace std;
class Stack {
    
    public :
    int *arr;
    int size;
    int top;
    Stack(int size){
        this->size=size;
        arr=new int[size];
        top=-1;
    }
   void  push(int value){
        if(top>=size){
            cout<<"stack overflow"<<endl;
        }
        else{
            top++;
            arr[top]=value;
            }
    }
    void sizee(){
        if(top==-1){
            cout<<"stack is empty "<<endl;
            
        }else{
            cout<<"size of the stack is used "<<top+1<<endl;
        }
    }
 void   topp(){
        if(top==-1){
            cout<<"stack is empty "<<endl;
            
        }
        else{
            cout<<arr[top]<<endl;
        }
    }
};

int main() {
    // Write C++ code here
    cout << "Hello world!"<<endl;
    Stack name(3);
    name.push(5);
     name.push(5);
      
    
    name.topp();
    cout<<"all is working good "<<endl;
    name.sizee();

    return 0;
}