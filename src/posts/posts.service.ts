import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './post.schema';

@Injectable() // Mark this class as a service that can be injected into other components
export class PostsService {
  // Inject the Post model into the service
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  // Create a new post in MongoDB

  async create(createPostDto: CreatePostDto): Promise<Post> {
    // Assign a unique id based on the current timestamp (you can change this logic)
    const newPost = new this.postModel({
      ...createPostDto,
      id: Date.now().toString(), // Assign a unique id
    });
    return await newPost.save(); 
  }

  // Get all posts from MongoDB
  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec(); // Return all posts
  }

  // Find a post by ID
  async findOne(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).exec(); // Find post by ID
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`); // Throw an exception if the post is not found
    }
    return post; // Return the found post
  }

  // Update a post by ID
  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const updatedPost = await this.postModel.findByIdAndUpdate(id, updatePostDto, {
      new: true, // Return the updated post
    }).exec();
    if (!updatedPost) {
      throw new NotFoundException(`Post with ID ${id} not found`); // Throw an exception if the post is not found
    }
    return updatedPost; // Return the updated post
  }

  // Delete a post by ID
  async remove(id: string): Promise<void> {
    const result = await this.postModel.findByIdAndDelete(id).exec(); // Delete the post by ID
    if (!result) {
      throw new NotFoundException(`Post with ID ${id} not found`); // Throw an exception if the post is not found
    }
  }
}
