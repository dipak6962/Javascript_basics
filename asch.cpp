#include<iostream>
using namespace std;
// void ru(int *p);
// int main (){
//     int i=10,*p=&i;
//     ru(p++);
//     return 0;
// }
// void ru(int *p){
// cout<<*p;
// }

// #define msg(a,b) \
// printf(#a "and " #b)
// int main(){
//  msg(sachin,ravi);
//     return 0;
// }


void check(string str){
    int n=str.length();
    bool flag =false;
    for(int i=0;i<n;i++){
        int v=0,c=0;
        string ans="";
        for(int j=i;j<n;j++){
          if(str[i]=='a' or str[i]=='A' or str[i]=='e' or str[i]=='E' or str[i]=='o' or str[i]=='O' or str[i]=='u' or str[i]=='U' or str[i]=='i' or str[i]=='I'){
            v++;
          }
          else{
            c++;
          }
          ans+=str[i];
          if(v*2==c){
            flag=true;
            cout<<ans<<endl;
            break;
          }
        }
        
    }
    if(!flag){
            cout<<"not found"<<endl;
        }
}
int main(){
    

    return 0;
}