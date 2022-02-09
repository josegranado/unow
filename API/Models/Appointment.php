<?php 
    include_once 'Database/database.php';
    class Appointment extends Database{
        public function getAppointmentsByMedic($medicId){
            $query = $this->connect()->query('SELECT * FROM appointments where medic_id='.$medicId.' AND is_approved=1');
            return $query;
        }
        public function requestAppointment($patientId, $medicId){
            $query = $this->connect()->query("INSERT INTO `appointments` (`medic_id`, `patient_id`, `is_approved`, `deleted`) VALUES (".$medicId.",".$patientId.", '0', '0');");
            return $query;
        }
        public function acceptAppointment($id){
            $query = $this->connect()->query("UPDATE appointments SET is_approved = 1 WHERE id=".$id);
            return $query;
        }
    }