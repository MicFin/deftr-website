<?php
/**
 * Redirect users to custom URL based on their role after login
 *
 * @param string $redirect
 * @param object $user
 * @return string
 */
function deftr_user_redirect( $redirect, $user ) {
	
	$role = $user->role;

	$free = "http;//thedeftr.com/free";
	$basic = "http;//thedeftr.com/basic";
	$pro = "http;//thedeftr.com/pro";
	$enterprise = "http;//thedeftr.com/enterprise";

	if( $role == 'basic' ) {
		$redirect = $basic;
	} elseif ( $role == 'pro' ) {
		$redirect = $pro;
	} elseif ( $role == 'enterprise' ) {
		$redirect = $enterprise;
	} else {
		$redirect = $free;
	}
	return $redirect;
}

