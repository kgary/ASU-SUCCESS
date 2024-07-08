extends RigidBody3D

class_name Player

@export var sync_position_node: Node3D
@export var camera_z_offset = 5
@onready var ui = $"../UI" as UI

var speed = 100 #Can be updated
var vertical_speed_increment = .2 #Can be updated
var horizontal_speed_increment = .1 #Can be updated


const JUMP_FORCE = 6 #Can be updated

var input: Vector3 = Vector3.ZERO

var can_jump = true


func _process(delta):
	sync_position_node.position = Vector3(position.x, sync_position_node.position.y, position.z - camera_z_offset)
	

func _physics_process(delta):
	if input.z != 0:
		linear_velocity.z = lerpf(linear_velocity.z, speed,  sign(input.z)* vertical_speed_increment * delta)
	if input.x != 0:
		linear_velocity.x = lerpf(linear_velocity.x, speed, sign(input.x) * horizontal_speed_increment * delta)
	
	position.z = clamp(position.z,-67,93)
	# On finishing game
	if(position.z>=93):
		ui.on_level_finished()
		
		
	# Uncomment me to fix boundary
	#if position.x < -5 or position.x> 5.123 or position.z<-100 : 
		#position = Vector3(-0.985,1.777,-66.71) # Starting position can be changed

func _input(event):
	# Change my key bindings
	input = Vector3(Input.get_action_raw_strength("left") - Input.get_action_raw_strength("right"), 0, Input.get_action_raw_strength("forward") - Input.get_action_raw_strength("slow_down"))
	
	# Now add jump effect to body
	#if Input.is_action_just_pressed("jump") and can_jump:
		#apply_central_impulse(Vector3(0, JUMP_FORCE, 0))
		#can_jump = false


	
func _on_body_entered(body):
	if body is Floor:
		can_jump = true
