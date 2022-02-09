<?php
    include_once 'Controllers/AppointmentController.php';
    $api = new AppointmentController();
    $endpoint = explode("/", $_SERVER["REQUEST_URI"]);
    switch( $endpoint[2] ){
        case 'appointments':
            if ( isset($_POST['api_token'])){
                $api->listAppointments($_POST['api_token']);
            }
            break;
        case 'request_appointment':
            $medicId = $endpoint[3];
            if ( is_numeric($medicId) && isset($_POST['api_token'])){
                $api->requestAppointmentByPatient($_POST['api_token'], $medicId);
            }
            break;
        case 'approve':
            $appointmentId = $endpoint[3];
            if ( is_numeric($appointmentId) && isset($_POST['api_token'])){
                $api->approveAppointment($_POST['api_token'] , $appointmentId );
            }
            break;
        default:
            echo json_encode(array(
                'Method not allowed'
            ));
            break;
    }
