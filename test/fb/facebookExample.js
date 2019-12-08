

// import { LoginButton,LoginManager,AccessToken } from 'react-native-fbsdk';

// function facebook(){
// 	LoginManager.logOut();
// 	LoginManager.logInWithPermissions(["public_profile"]).then(
// 		function(result) {
// 			if (result.isCancelled) {
// 				console.log("Login cancelled");
// 			} else {
// 				AccessToken.getCurrentAccessToken().then((data) => {
// 					const { accessToken } = data;
// 					fetch('https://graph.facebook.com/v2.5/me?fields=id,email,first_name,last_name&access_token=' + accessToken)
// 					.then((response) => response.json())
// 					.then((json) => {
// 						console.log(json);
// 					})
// 					.catch(() => {
// 						console.log('Data not found,Please check your profile');
// 					})
// 				});
// 			}
// 		},
// 		function(error) {
// 			console.log('Login faild,please try again');
// 		}
// 	);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                                                                                   
//                                                                                                                        //
//                                                                                                                        //
//											Please comment out this code to see clearly                                   //
//                                                                                                                        //
//                                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////