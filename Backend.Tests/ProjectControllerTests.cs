﻿using Backend.Tests;
using BackendFramework.Controllers;
using BackendFramework.Interfaces;
using BackendFramework.ValueModels;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace Tests
{
    public class ProjectControllerTests
    {
        IProjectService _projectService;
        ProjectController controller;

        [SetUp]
        public void Setup()
        {
            _projectService = new ProjectServiceMock();
            controller = new ProjectController(_projectService);
        }

        Project RandomProject()
        {
            Project project = new Project();
            project.Name = Util.randString();
            return project;
        }

        [Test]
        public void TestGetAllProjects()
        {
            _projectService.Create(RandomProject());
            _projectService.Create(RandomProject());
            _projectService.Create(RandomProject());

            var projects = (controller.Get().Result as ObjectResult).Value as List<Project>;
            Assert.That(projects, Has.Count.EqualTo(3));
            _projectService.GetAllProjects().Result.ForEach(project => Assert.Contains(project, projects));
        }

        [Test]
        public void TestGetProject()
        {
            Project project = _projectService.Create(RandomProject()).Result;

            _projectService.Create(RandomProject());
            _projectService.Create(RandomProject());

            var action = controller.Get(project.Id).Result;

            Assert.That(action, Is.InstanceOf<ObjectResult>());

            var foundProjects = (action as ObjectResult).Value as Project;
            Assert.AreEqual(project, foundProjects);
        }

        [Test]
        public void TestCreateProject()
        {
            Project project = RandomProject();
            string id = (controller.Post(project).Result as ObjectResult).Value as string;
            project.Id = id;
            Assert.Contains(project, _projectService.GetAllProjects().Result);
        }

        [Test]
        public void TestUpdateProject()
        {
            Project origProject = _projectService.Create(RandomProject()).Result;

            Project modProject = origProject.Clone();
            modProject.Name = "Mark";

            _ = controller.Put(modProject.Id, modProject);

            Assert.That(_projectService.GetAllProjects().Result, Has.Count.EqualTo(1));
            Assert.Contains(modProject, _projectService.GetAllProjects().Result);
        }

        [Test]
        public void TestDeleteProject()
        {
            Project origProject = _projectService.Create(RandomProject()).Result;

            Assert.That(_projectService.GetAllProjects().Result, Has.Count.EqualTo(1));

            _ = controller.Delete(origProject.Id).Result;

            Assert.That(_projectService.GetAllProjects().Result, Has.Count.EqualTo(0));
        }

        [Test]
        public void TestDeleteAllProjects()
        {
            _projectService.Create(RandomProject());
            _projectService.Create(RandomProject());
            _projectService.Create(RandomProject());

            Assert.That(_projectService.GetAllProjects().Result, Has.Count.EqualTo(3));

            _ = controller.Delete().Result;

            Assert.That(_projectService.GetAllProjects().Result, Has.Count.EqualTo(0));
        }
    }
}