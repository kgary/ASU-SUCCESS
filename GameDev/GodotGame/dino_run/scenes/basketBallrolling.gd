extends Area2D


# Called when the node enters the scene tree for the first time.
var rotation_speed : float = 2 * PI  # Adjust as needed

func _ready():
	# Start the rotation process
	set_process(true)

func _process(delta):
	# Rotate the basketball
	rotation += rotation_speed * delta
