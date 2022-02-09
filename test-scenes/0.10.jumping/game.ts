
let jump = new Entity()

jump.addComponent(new GLTFShape('models/jumps.glb'))
jump.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8)
  })
)

engine.addEntity(jump)
