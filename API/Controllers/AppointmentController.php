<?php
include_once 'Models/User.php';
include_once 'Models/Appointment.php';
class AppointmentController {
    public function listAppointments($api_token){
        $user = new User();
        $appointment = new Appointment();
        $res = $user->getUserByApiToken($api_token);
        if ( $res->rowCount() == 1){
            $auth_user = $res->fetch();
        }
        if ( $auth_user && $auth_user['role'] == 1){
            $resAppointments = $appointment->getAppointmentsByMedic($auth_user['id']);
            if ( $resAppointments->rowCount() > 0){
                $appointments = $resAppointments->fetchAll();
                echo json_encode(array(
                    'status' => '200',
                    'data' => $appointments,
                ));
            }else{
                echo json_encode(array(
                    'status' => 200,
                    'data' => [],
                ));
            }
        }else{
            echo json_encode(array(
                'status' => 401,
                'message' => 'Not authorized',
            ));
        }
    }
    public function requestAppointmentByPatient($api_token, $medicId ){
        $user = new User();
        $appointment = new Appointment();
        $res = $user->getUserByApiToken($api_token);
        if ( $res->rowCount() == 1){
            $auth_user = $res->fetch();
        }
        if ( $auth_user && $auth_user['role'] == 2){
            $resMedic = $user->getUser($medicId );
            if ( $resMedic->rowCount() > 0){
                $medic = $resMedic->fetch();
                $resAppointment = $appointment->requestAppointment($auth_user['id'],$medic['id'] );
                echo json_encode(array(
                    'status' => 200,
                    'message' => 'Appointment created successfully',
                ));
            }
        }else{
            echo json_encode(array(
                'status' => 401,
                'message' => 'Not authorized',
            ));
        }
    }
    public function approveAppointment($api_token, $idAppointment){
        $user = new User();
        $appointment = new Appointment();
        $res = $user->getUserByApiToken($api_token);
        if ( $res->rowCount() == 1){
            $auth_user = $res->fetch();
        }
        if ( $auth_user && $auth_user['role'] == 1 ){
            $resAppointment = $appointment->acceptAppointment($idAppointment);
            if ( $resAppointment->rowCount() > 0){
                echo json_encode(array(
                    'status' => 200,
                    'message' => 'Appointment approved'
                ));
            }else{
                echo json_encode( array(
                    'status' => 404,
                    'message' => 'Not found'
                ));
            }
        }else{
            echo json_encode( array(
                'status' => 401,
                'message' => 'Not authorized',
            ));
        }
    }
}